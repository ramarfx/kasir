import { Button } from "@/Components/ui/button";
import { usePDF } from "react-to-pdf";

const payment = ({ data }) => {
  const {toPDF, targetRef} = usePDF({
    filename: "invoice.pdf",
  });

  console.log(data.payment);

  return (
    <div ref={targetRef}>
      ini payment
      <p>{data.payment}</p>
      <p>{data.phone}</p>
      <p>{data.total}</p>

      <Button onClick={() => toPDF()}>ini tombol pdf</Button>
    </div>
  );
};

export default payment;
