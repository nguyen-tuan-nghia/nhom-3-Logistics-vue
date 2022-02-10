<template>
        <div class="container-fluid">
            <div class="mx-auto" style="width: 700px">
                <div class="card">
                    <div class="card-header">Create Posts</div>
                    <div class="card-body">
                        <validation-observer
                            ref="observer"
                            v-slot="{ invalid }"
                        >
                            <form @submit.prevent="submit">
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="Title"
                                    rules="required|max:50"
                                >
                                    <v-text-field
                                        v-model="title"
                                        :counter="50"
                                        :error-messages="errors"
                                        label="Title"
                                        required
                                        @input="sanitizeTitle(title)"
                                    ></v-text-field>
                                </validation-provider>
                                <br>
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="Slug"
                                    rules="required|max:100"
                                >
                                    <v-text-field
                                        :counter="100"
                                        v-model="slug"
                                        :error-messages="errors"
                                        label="Slug"
                                        required
                                    ></v-text-field>
                                </validation-provider>
                                <div style="color:red" v-if="errors.slug">{{errors.slug[0]}}</div>
                                <br>
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="keywords"
                                    rules="required|max:100"
                                >
                                    <v-combobox
                                        v-model="keywords"
                                        :items="null"
                                        hide-selected
                                        :counter="100"
                                        :error-messages="errors"
                                        hint="Maximum of 5 tags"
                                        label="Add some tags"
                                        multiple
                                        persistent-hint
                                        small-chips
                                    >
                                    </v-combobox>
                                </validation-provider>
                                <br />
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="photo"
                                    rules="required"
                                >
                                    <v-file-input
                                        accept="image/*"
                                        placeholder="Pick an avatar"
                                        prepend-icon="mdi-camera"
                                        label="Avatar"
                                        ref="fileInput"
                                        @change="pickFile"
                                        v-model="image"
                                        :error-messages="errors"
                                    ></v-file-input>

                                </validation-provider>
                                <div v-if="image">
                                        <img
                                            class="w-150px"
                                            src=""
                                            ref="fileInputDisplay"
                                        />
                                    </div>
                                <label> content</label>
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="content"
                                    rules="required"
                                >
                                    <vue-editor
                                        :error-messages="errors"
                                        v-model="content"
                                    ></vue-editor>
                                </validation-provider>
                                <br />
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="select"
                                    rules="required"
                                >
                                    <v-select
                                        v-model="select"
                                        :items="items"
                                        item-text="name"
                                        item-value="value"
                                        :error-messages="errors"
                                        label="Select"
                                        data-vv-name="select"
                                        required
                                    ></v-select>
                                </validation-provider>
                                <v-btn
                                    class="mr-4"
                                    type="submit"
                                    :disabled="invalid"
                                    depressed
                                    color="primary"
                                >
                                    submit
                                </v-btn>
                            </form>
                        </validation-observer>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import { required, digits, max, regex } from "vee-validate/dist/rules";
import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
    ...digits,
    message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
    ...required,
    message: "{_field_} can not be empty",
});

extend("max", {
    ...max,
    message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
    ...regex,
    message: "{_field_} {_value_} does not match {regex}",
});
export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        rulesFileImge: [
            (value) =>
                !value ||
                value.size < 2000000 ||
                "Avatar size should be less than 2 MB!",
        ],
        content: "",
        title: "",
        image: [],
        slug:'',
        keywords: "",
        select: null,
        items: [
            { value: 1, name: "View" },
            { value: 2, name: "hiden" },
        ],
        errors:{}
    }),
    methods: {
    sanitizeTitle: function(title) {
      var slug = "";
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd');
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '');
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-');
      return this.slug=slug;
    },
        pickFile(){
            this.$refs.fileInputDisplay.src= URL.createObjectURL(this.image)
        },
        submit() {
            this.$refs.observer.validate();
            let text = this.keywords.join();
            const app = new FormData();
            app.append("title", this.title);
            app.append("slug", this.slug);
            app.append("content", this.content);
            app.append("image", this.image);
            app.append("select", this.select);
            app.append("keywords", text);
            this.axios
                .post("/api/add/posts", app)
                .then((res) => {
                    this.flashMessage.success({
                        title: "Message",
                        message: "add post successfully",
                        time: 5000,
                        blockClass: "custom-block-class",
                    });
                })
                .catch(err => {
                    this.flashMessage.error({
                        title: "message",
                        message: "new add faild",
                        time: 5000,
                        blockClass: "custom-block-class",
                    });
                    if(err.response.status=422){
                        console.log(err);
                        this.errors=err.response.data.errors;
                    }
                });
        },
    },
};
</script>
<style scoped>
.w-150px{
    width: 150px;
}
</style>
