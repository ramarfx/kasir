const payment = ({data}) => {

  console.log(data.payment);

  return (
    <div>
      ini payment
      <p>{data.payment}</p>
      <p>{data.phone}</p>
      <p>{data.total}</p>
    </div>
   );
}

export default payment;
