import Carousel from 'react-material-ui-carousel'

function Example(props: any) {
    
    var images = [
        {
            name: "Random Name #1",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
            autoPlay={true}
            indicators={false}
            cycleNavigation={true}
            navButtonsAlwaysVisible={true}
            fullHeightHover={true}
            sx={{ width: '100%', backgroundColor: 'rgba(14, 61, 85, 0.08);' }}>
            {
                images.map((img_url, i) => <Item key={i} img_url={img_url} />)
            }
        </Carousel>
    )
}

function Item(key: any, img_url: any) {
    console.log("hola" + process.env.PUBLIC_URL)
    return (
        <div key={key}>
            <img src={'images/1.jpeg'} alt='property' />
        </div>
    )
}

export default Example;