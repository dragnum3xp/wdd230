document.querySelector('form').addEventListener('submit', function(event) {
    
    event.preventDefault();
    const now = new Date();
    
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0');
    
   
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    
    const formattedTimestamp = `${year}/${month}/${day} ${hours}:${minutes}`;

    
    document.getElementById('timestamp').value = formattedTimestamp;

    console.log('Timestamp:', document.getElementById('timestamp').value);
});