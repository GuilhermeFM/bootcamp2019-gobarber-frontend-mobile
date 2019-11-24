import React, { useState, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  // The order of setOpened and onChange here matters
  // if onChange is called first datetime component wont
  // close.
  const handleDateOnChange = (_, timestamp) => {
    setOpened(false);

    if (timestamp) {
      onChange(new Date(timestamp));
    }
  };

  return (
    <Container>
      <DateButton onPress={() => setOpened(true)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
      {opened && (
        <DateTimePicker
          value={date}
          onChange={handleDateOnChange}
          display="spinner"
          locale="pt"
          mode="date"
        />
      )}
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
