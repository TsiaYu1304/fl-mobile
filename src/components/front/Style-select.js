export const seletStyles = {
    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({ 
        ...styles,
        height:25,
        backgroundColor: '#F0F1F5', 
        border:"#F0F1F5",
        BorderRadius:2,
        cursor: isDisabled ?  'not-allowed':'default',    
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        cursor: isDisabled ?  'not-allowed':'default',    
      }
    },
  };
