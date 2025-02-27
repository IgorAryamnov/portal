import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteFromFavorite } from "../../../features/favoriteStore";
import { deleteFromFavoriteProducts } from "../../../features/favoriteFullInformation";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--green);
  border-radius: 30px;
  width: 100%;
  margin-bottom: 20px;
`;
const StyledButton = styled.button`
  margin-right: 10px;
  border: 1px solid var(--orange);
  outline: none;
  background-color: var(--orange);
  font-size: 20px;
  padding: 10px;
  border-radius: 20px;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 1px solid var(--green);
    color: var(--grey);
  }
`;
const ProductName = styled(Link)`
  color: #ffe400;
  font-size: 30px;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    color: var(--grey);
  }
`;

export function FavoriteProduct({ data }) {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <img
          style={{ borderRadius: "30px 0px 0px 30px" }}
          height="200px"
          width="200px"
          src={data.product.set_img_url}
          alt="favorite-product-img"
        />
        <ProductName to={`/favorite/${data.product.set_num}`}>
          {data.product.name}
        </ProductName>
        <StyledButton
          onClick={() => {
            dispatch(
              deleteFromFavorite({
                favoriteId: data.product.set_num,
                user: data.user,
              })
            );
            dispatch(
              deleteFromFavoriteProducts({
                favoriteId: data.product.set_num,
                user: data.user,
              })
            );
          }}
        >
          Удалить из избранного
        </StyledButton>
      </Container>
    </>
  );
}

FavoriteProduct.propTypes = {
  data: PropTypes.object,
};
