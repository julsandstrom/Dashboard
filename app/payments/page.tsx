import { Payment, columns } from './columns';
import { DataTable } from './data-table';

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      username: 'Johnny Doe',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'success',
      username: 'Peter Clark',
      email: 'example@gmail.com',
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
