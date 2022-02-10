<?php

namespace App\Exports;

use App\Models\order;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ordersExport implements FromQuery,WithMapping,WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    use Exportable;
    protected $id;
    public function __construct($id)
    {
        $this->id = $id;
    }
    public function query()
    {
        // return order::query()->whereKey($this->id)->with('customer')->get();
        return order::query()->whereKey($this->id)->with('customer');
    }
    /**
    * @var order $order
    */
    public function map($order): array
    {
        return [
            $order->id,
            $order->customer->name,
            $order->customer->phone,
            $order->total_weight,
            $order->cod,
            $order->created_at,
        ];
    }
    public function headings(): array
    {
        return [
            '#',
            'User_name',
            'User_phone',
            'Order_total_weight',
            // 'product_1',
            // 'product_2',
            // 'product_3',
            // 'product1_4',
            // 'product_5',
            'Order_cod',
            'Date',
        ];
    }
}
