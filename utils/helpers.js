// helper utilities go here. Starting with format_date
module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true })
    },
};