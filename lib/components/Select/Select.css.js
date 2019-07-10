import { colors, text } from '../../helpers/cssInJs';

export default {
  singleValue: provided => ({
    ...provided,
    fontFamily: text.fontPrimary,
    fontSize: '1.3rem',
    margin: '-1px 3px 2px',
  }),

  placeholder: provided => ({
    ...provided,
    fontFamily: text.fontPrimary,
    fontSize: '1.3rem',
    color: 'inherit',
    margin: '-1px 3px 2px',
  }),

  menu: provided => ({
    ...provided,
    borderRadius: '3px',
    marginTop: '-2px',
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
    boxShadow: 'none',
    border: `1px solid ${colors.blueDarkest}`,
    borderTop: 'none',
    zIndex: 'unset',
  }),

  control: (provided, { selectProps: { menuIsOpen } }) => {
    const commonStyles = {
      cursor: 'pointer',
      boxShadow: 'none',
      transition: 'none',
    };

    const hoverStyles = {
      ...commonStyles,
      borderColor: colors.blueDarkest,
      color: colors.blueDarker,
    };

    const openStyles = {
      ...hoverStyles,
      color: colors.slateDarkest,
      borderRadius: '3px 3px 0 0',
      borderBottomColor: 'transparent !important',
    };

    const regularStyles = {
      ...commonStyles,
      border: '1px solid #515864',
      borderRadius: '3px',
      color: colors.slateDarkest,
    };

    return {
      ...provided,
      ...(menuIsOpen ? openStyles : regularStyles),
      '&:hover': hoverStyles,
    };
  },

  menuList: provided => ({
    ...provided,
    padding: 0,
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
  }),

  option: provided => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: colors.white,
    color: colors.slateDarkest,
    fontFamily: text.fontPrimary,
    fontSize: '1.3rem',
    padding: '9px 11px',
    '&:hover': {
      backgroundColor: colors.slateLightest,
      color: colors.blueDarker,
    },
    '&:active': {
      backgroundColor: colors.slateLightest,
      color: colors.blueDarker,
    },
  }),
};
