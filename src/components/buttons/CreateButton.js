import { MdAddCircle } from "react-icons/md";
import { ShopButtonStyled } from "../../styles";

const CreateCategoryButton = () => {
  return (
    <ShopButtonStyled>
      <MdAddCircle color="#ff85a2" size="1.5em" /> Category
    </ShopButtonStyled>
  );
};

export default CreateCategoryButton;
