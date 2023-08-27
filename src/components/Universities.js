import React from "react";
import  './styling.css';
import Carosel from 'react-elastic-carousel'

function Universities(){
    const sliderdata=[
        {
            image:'https://imgs.search.brave.com/7VKzJQJj4SwrIfrWj_AYX99hiXD5uEhD7tWwvCLb6xM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/NTE0NDc2L3Bob3Rv/L3VuaXZlcnNpdHkt/Y2FtYnJpZGdlLXVr/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz05Q2dDc29BRTlJ/RXpzOTJGLW9VRE83/cHlVY3RvVWRGMmds/cmxzN2R6a2YwPQ',
            name:'Cambridge University',
        },
        {
            image:'https://imgs.search.brave.com/b0ZpNt6QxWNYrSnBWOvs1PEGGX4d893DX6-mmNsoU0Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODUy/MTg0ODE4L3Bob3Rv/L2hhcnZhcmQtdW5p/dmVyc2l0eS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dWFJ/ZXZSYnpkR2J2cng5/V1d2MldrV1NQREtZ/enBOX1ZxMHVQUDNU/SWZqMD0',
            name:'Harvard University'
        },
        {
            image:'https://imgs.search.brave.com/BHBmKvdByx1XTvmtwvZ_7NkUoTEHbOpko-tb33WOLpY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dW5pdmVyc2l0eW9m/Y2FsaWZvcm5pYS5l/ZHUvc2l0ZXMvZGVm/YXVsdC9maWxlcy9z/dHlsZXMvY29sbGFn/ZV80X2l0ZW1fbGFy/Z2Vfd2lkZS9wdWJs/aWMvMjAyMS0xMC8y/MDE4XzA1XzEwX1VD/U0RfZGF5Mi0xMjAu/anBnP2g9ZjJmY2Y1/NDYmaXRvaz1KQm5a/ZEFJbA'
            ,name:'University of California'
        },
        {
            image:'https://imgs.search.brave.com/vmNjYqearHJSOp2MS9aSyLVZSV5F7jX9aIxZ6cgiGOU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mYXJt/NS5zdGF0aWNmbGlj/a3IuY29tLzQxMjcv/NTA1MjcxNzMwM19j/YWVmODA1MzZkX28u/anBn'
            ,name:'ETH Zurich'
        },
        {
            image:'https://imgs.search.brave.com/jXjUAmrdPaJmb72_xrNz5zXGb5NZVTb5jyDPMoIdvLY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bXBnLmRlLzExNzM2/NDQ1L3N0YW5kYXJk/LTE1MTA2NzIwNDEu/anBnP3Q9ZXlKM2FX/UjBhQ0k2TWpZekxD/Sm9aV2xuYUhRaU9q/RTRPU3dpWm1sMElq/b2lZM0p2Y0NJc0lt/WnBiR1ZmWlhoMFpX/NXphVzl1SWpvaWFu/Qm5JaXdpYjJKcVgy/bGtJam94TVRjek5q/UTBOWDA9LS0zODdi/ZDVhNWMzZmFmMWJm/OTNhYjU1YWM2N2M0/MTRhMzMyYzQ0MmM4'
            ,name:'Max Planck'
        },
        {
            image:'https://imgs.search.brave.com/doHUnLXwX7tS6Hi4hcXLSQwgJ9LGSBJfM21UDwAGw2s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IzL09sZF9Db2xs/ZWdlX1F1YWQuanBn'
            ,name:'University of Edinberg'
        },
        {
            image:'https://imgs.search.brave.com/03rOVucsIfQ0z87eh1hkt7AuNx-8OTE117Koy-hyeCk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzIyL01hcnlsYW5k/X0hhbGwsX0pvaG5z/X0hvcGtpbnNfVW5p/dmVyc2l0eSxfSmFu/XzIwMTEuanBn'
            ,name:"John's Hopkins"
        },
        {
            image:'https://imgs.search.brave.com/apG29fBkMfoIc1Dr-CleW6MeimC0YEMU-LYkgpZsxiE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMzLmNvbW11bml0/eWNvbGxlZ2VyZXZp/ZXcuY29tL3Bob3Rv/LzExMjJ4ODY0LzAv/NjgvYXJrYW5zYXMt/c3RhdGUtdW5pdmVy/c2l0eS1taWQtc291/dGgtYm1UUWJpMC5q/cGc'
            ,name:'Midrigous State'
        },
        {
            image:'https://imgs.search.brave.com/-4-vrbX9S0TEof2SXcH7T4_oKkSY033k_W0JUuV6KaY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2YzL0lsbGluaV9V/bmlvbl9Vbml2ZXJz/aXR5X29mX0lsbGlu/b2lzX2Zyb250Lmpw/Zw'
            ,name:'University of Illinois'
        },
        {
            image:'https://imgs.search.brave.com/tsLHJeRDs--MThbKAub2GZRFx_SEZte4NhOQDnkoHKQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNTAvMTI0NzUw/LTA1MC0wNTkyQkI5/Ri9IdW1ib2xkdC1V/bml2ZXJzaXR5LW9m/LUJlcmxpbi5qcGc_/dz00MDAmaD0zMDAm/Yz1jcm9w'
            ,name:'Humboldt University Berlin'
        }
    
    ]
    return (
        <>
        <div class="universityhead">
            <h3>Learn From Scientists,research scholars from the top institutes in the world</h3>
        </div>
        <div class="carousel-container">
        <Carosel>
             {sliderdata.map((item, index) => (
                <div key={index} class="imageslider">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                 </div>
              ))}
        </Carosel>
        </div>
        </>
    );

}
export default Universities;