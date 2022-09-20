
import Button from "@mui/material/Button";


function ItemCount({ stock, count, setCount, onAdd}) {

  const increase = () => {
    stock > count ? (
      setCount(count + 1)
    ) : (
      <Button disabled variant="outlined">
        +
      </Button>
    );
  };
  const decrease = () => {
    count > 1 ? (
      setCount(count - 1)
    ) : (
      <Button disabled variant="outlined">
        -
      </Button>
    );
  };

  return (
      <>

        <Button
          variant="outlined"
          onClick={decrease}
          size="large"
        >
          -
        </Button>
        <h3>{count}</h3>
        <Button
          variant="outlined"
          onClick={increase}
          size="large"
        >
          +
        </Button>
       
        <Button
          variant="outlined"
          onClick={onAdd}
          size="large"
        >
          Comprar
        </Button>

        </>

  );
}

export default ItemCount;