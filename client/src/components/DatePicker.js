<form className={classes.container} noValidate>
  <TextField
    id="date"
    label="Class Day"
    type="date"
    defaultValue= {Date.now}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>