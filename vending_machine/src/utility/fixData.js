export const minusQuantity = (data, setData, { id, quantity }) => {
  setData(
    data.map((data) =>
      data.id !== id ? data : { ...data, quantity: (quantity -= 1) }
    )
  );
};
