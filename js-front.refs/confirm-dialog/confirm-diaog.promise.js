function confirmDialog(msg) {
  return new Promise(function(resolve, reject) {
    let confirmed = window.confirm(msg);

    return confirmed ? resolve(true) : reject(false);
  });
}

confirmDialog('Do you really want to delete this?')
  .then(() => doYourDeleteAction(task.id))
  .catch(err => alert('Unable to delete!'));
