import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 500px;
  margin-right: 20px;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 400px;
`;

export const InstagramImg = styled.a`
  width: auto;
  height: 10px;
  max-height: 10px;
`;

export const PdfLink = styled.button`
  border: none;
  font-size: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 25px 80px;
  display: inline-block;
  margin: 15px 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  text-decoration: none;
  border-radius: 50px;
  border: 3px solid #fff;
  color: #fff;
  overflow: hidden;
  background: #12b886;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 10px;
  margin: 10px 0;
  justify-content: center;
`;

export const Icon = styled.a`
  text-decoration: none;
  width: 20px;
  margin-right: 20px;

  svg {
    color: #777;
    text-decoration: none;
  }
`;
