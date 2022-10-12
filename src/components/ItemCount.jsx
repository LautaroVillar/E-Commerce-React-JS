import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

function ItemCount({ stock, count, setCount, stockLimit, initial }) {
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

  const buttons = [
    <Button
      variant="outlined"
      onClick={decrease}
      color="inherit"
      disabled={count === initial}
      key="-"
    >
      -
    </Button>,
    <Button color="inherit" key="count">
      {count}
    </Button>,
    <Button
      variant="outlined"
      onClick={increase}
      color="inherit"
      disabled={count === stockLimit || stockLimit === 0 || count === stock}
      key="+"
    >
      +
    </Button>,
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ButtonGroup>{buttons}</ButtonGroup>
      </Box>
    </>
  );
}

export default ItemCount;
