const regnumMixin = {
  methods: {

    formatRegnum: function(regnum) {
      let formatted;
      if (regnum) {
        regnum = regnum.toString();
        while (regnum.length < 3) {
          regnum = "0" + regnum;
        }
        formatted = "#" + regnum;
      } else {
        formatted = '';
      }
      return formatted;
    }

  }
};

export { regnumMixin as default };