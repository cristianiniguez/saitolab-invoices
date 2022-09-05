import { useIntl } from 'react-intl';

function useFormatMessage() {
  const { formatMessage } = useIntl();

  type FormatMessageParams = Parameters<typeof formatMessage>;
  type Id = FormatMessageParams[0]['id'];
  type Values = FormatMessageParams[1];

  return (id: Id, values?: Values) => formatMessage({ id }, values);
}

export default useFormatMessage;
