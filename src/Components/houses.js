// extends index
// mixin data(house)
//     -infoPath = `/app/houses/${house.ID}`
//     -varPath = `/app/houses/${house.ID}/variables`
//     -rtPath = `/app/houses/${house.ID}/rt`
//     div(class="collapsible-header" id=`${house.ID}`)
//         i(class="material-icons") place
//         p ID: #{house.ID}.
//         p Direccion: #{house.ADDRESS}.
//     div(class="collapsible-body")
//         span
//             p Detalles de instalación
//             p Instalado por: #{house.INSTALLER}
//             p Fecha: #{house.INSTALLDATE}
//             div(class='right-align')
//                 a(class="waves-effect waves-red btn-flat right-align" href=rtPath) RT
//                 a(class="waves-effect waves-yellow btn-flat right-align" href=varPath) Variables
//                 a(class="waves-effect waves-teal btn-flat right-align" href=infoPath) Info

// block content
//     script(src='/js/collapsible.js')
//     script(src='/js/filter.js')
//     input(id="txtFilter" onkeyup="filter()")
//     ul(class="collapsible")
//         for house in houses
//             li
//                 +data(house)

import React from 'react';

function Houses(props){
    return <div> Hola desde Houses</div>
}

export default Houses;