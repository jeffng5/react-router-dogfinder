import React from 'react';
let data = require('/Users/jeffreyng/Downloads/react-router-dogfinder/src/db.json')



function DogList() {

 return( 
<>

<div>
    <div>
<img src={data['dogs'][0]['src']}/>
Name : {data['dogs'][0]['name']}
</div>
<div>
Age : {data['dogs'][0]['age']}
</div>
<div>
Facts: {data['dogs'][0]['facts']}
</div>
</div>


<div>
<img src={data['dogs'][1]['src']}/>
<div>
Name : {data['dogs'][1]['name']}
</div>
<div>
Age : {data['dogs'][1]['age']}
</div>
<div>
Facts : {data['dogs'][1]['facts']}
</div>
</div>

<div>
<img src={data['dogs'][2]['src']}/>  
</div>
<div>  
Name : {data['dogs'][2]['name']}
</div>
<div>
Age : {data['dogs'][2]['age']}
</div>
<div>
Facts : {data['dogs'][2]['facts']}
</div>

</>
)};

export default DogList;