const xhr = new XMLHttpRequest();

xhr.addEventListener('load',() => {
  console.log(xhr.response);
  console.log(xhr.status);
});

xhr.open('GET','https://supersimplebackend.dev/not-supported');
xhr.send();
