// import { MdContactPhone } from 'react-icons/md';
import { HelloTitle, HelloWrap, Icon, Text } from './HelloDiv.styled';
export default function HelloDiv() {
  return (
    <HelloWrap>
      <HelloTitle>Personal contacts book</HelloTitle>
      <Text>
        {' '}
        Please, <b>Register</b> or <b>Log In</b> to have access to the Contacts
        Book
      </Text>
      <Icon />
    </HelloWrap>
  );
}
