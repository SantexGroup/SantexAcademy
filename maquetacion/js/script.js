
  const localidadesCounter = document.getElementById('localidades-counter');
  const mentoresCounter = document.getElementById('mentores-counter');
  const participantesCounter = document.getElementById('participantes-counter');
  
  const maxLocalidades = 58;
  const maxMentores = 50;
  const maxParticipantes = 301;
  
  function countTo(element, max) {
    let count = 0;
    const intervalId = setInterval(() => {
      count++;
      element.textContent = count.toString();
      if (count === max) {
        clearInterval(intervalId);
      }
    }, 10);
  }
  
  countTo(localidadesCounter, maxLocalidades);
  countTo(mentoresCounter, maxMentores);
  countTo(participantesCounter, maxParticipantes);
  