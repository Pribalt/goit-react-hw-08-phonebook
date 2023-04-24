import {
  Wrapper,
  Image,
  Title,
} from 'components/HomePageDetails/HomePageDetails.syled';

export const HomePageDetails = () => {
  return (
    <Wrapper>
      <Image
        src="https://vtzn.khai.edu/images/nicepage-images/2b636b1b84bf1afaf1236d993bc47837aba359fd87f11b8986015e1977e7a8d122dab90fefd756b45944a42d9fc19fda9c5e4097f5e24e6060f960_1280.png"
        alt=""
        width="300"
        height="200"
      />
      <Title>Welcome in PhoneBook application!</Title>
    </Wrapper>
  );
};
