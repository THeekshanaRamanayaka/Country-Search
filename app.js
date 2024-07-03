// fetch("https://restcountries.com/v3.1/all")
// .then(res=>res.json())
// .then(data=>{
//     let tblCountries = document.getElementById("tbl");

//     let tblBody = `<tr>
//                     <th>Name</th>
//                     <th>Flag</th>
//                 </tr>`;

//     data.forEach(element => {
//         tblBody+=`<tr>
//                     <td>${element.name.common}</td>
//                     <td>${element.flag}</td>
//                 </tr>`

//         console.log(element.name.common);
//     });
//     tblCountries.innerHTML = tblBody
// })

async function fetchCountryData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        
        let tblBody = '';

        data.forEach(element => {
            tblBody += `<tr>
                            <td>${element.name.common}</td>
                            <td>${element.name.official}</td>
                            <td>${element.capital}</td>
                            <td>${element.region}</td>
                            <td><img src="${element.flags.png}" alt="Flag of ${element.name.common}"></td>
                        </tr>`;
        });

        document.getElementById('tblBody').innerHTML = tblBody;
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}

function filterTable() {
    const searchTerm = document.getElementById('txtSearchValue').value.toLowerCase();
    const tableRows = document.querySelectorAll('#tblBody tr');

    tableRows.forEach(row => {
        const countryName = row.querySelector('td').textContent.toLowerCase();
        if (countryName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}


fetchCountryData();

function searchCountry(){
    let searchValue=document.getElementById("txtSearchValue").value;

    let officialName = document.getElementById("officialName");
   let name = document.getElementById("name")
   let img =  document.getElementById("img")


    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            officialName.innerText = obj.name.official;
            name.innerText = obj.name.common;
     
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })
        console.log(data);



    
    })
}