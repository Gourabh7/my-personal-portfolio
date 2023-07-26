  const scriptURL = 'https://script.google.com/macros/s/AKfycbz_9DsTkcD7wQTe25LNxOrmFWuesJOcxCzlReW0QX8mtX9uZG8BEniL3sa4cEXJ6hIQ/exec'
      const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            console.log("object")
            msg.innerHTML = "Message Sent  Successfully"
            setTimeout(function() {
              msg.innerHTML ="";
            },5000)
            form.reset();
          })
          .catch(error => console.log('Error!', error.message))
      })
