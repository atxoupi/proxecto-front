import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from '../../components/card/index.jsx';

const Sobremi = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt risus. Quisque vitae luctus eros, sit amet tempus est. Nunc nec velit venenatis, blandit elit ut, varius magna. Phasellus tincidunt nunc sit amet diam lacinia, in eleifend lacus lobortis. Sed porta arcu id quam fermentum, vel aliquam quam scelerisque. Morbi eros magna, dictum eu justo fringilla, iaculis tristique tellus. Nam sit amet mi at nisl dignissim fermentum sit amet quis justo. /nSed ultrices justo ante, vitae sollicitudin magna accumsan a. Proin pharetra suscipit posuere. Sed sed malesuada tortor. Nunc sed ultricies erat. Phasellus sodales eget metus et volutpat. Praesent pulvinar consequat porta. Pellentesque vitae nisi pretium, rhoncus nunc eget, condimentum diam. Praesent fringilla eu arcu at laoreet. Suspendisse sed magna feugiat, accumsan risus sit amet, volutpat quam. Vivamus consequat nec diam non placerat. Duis tincidunt maximus ligula, vel maximus neque ornare a. /n Suspendisse accumsan ultrices hendrerit. Fusce vel sem et quam ullamcorper imperdiet. Duis tincidunt vehicula nisi vel consectetur. Mauris ullamcorper suscipit tortor in accumsan. Sed ullamcorper neque nisi, et vulputate felis porta at. Sed eu tortor erat. Etiam malesuada ligula sit amet mauris gravida, non vulputate nisl convallis. Cras lobortis lacus sed lorem interdum venenatis non sed felis. Nullam dui eros, maximus quis risus ut, placerat porta arcu. Donec placerat tincidunt arcu, nec fringilla diam convallis et. Donec et mollis neque, et tempus sapien. /nInteger leo eros, hendrerit eget lorem non, dapibus ultricies ipsum. Sed quis pellentesque tortor, et ultrices libero. Nullam ultricies tellus ut mi vehicula, sit amet pulvinar mi tempus. Duis et elementum tortor, a interdum lacus. Vivamus at dolor laoreet, dignissim lectus quis, condimentum eros. Morbi eu lacus a turpis pellentesque mollis scelerisque at nunc. Sed nec elit blandit, porta justo sed, lobortis enim. Maecenas commodo molestie nisi, nec sollicitudin ipsum. Fusce tempor fermentum felis, ac sagittis leo dignissim a. Fusce ipsum nibh, suscipit vitae tincidunt at, bibendum id ipsum. Proin rutrum blandit felis nec commodo. Pellentesque et pellentesque arcu, lacinia gravida lectus. Nulla facilisi. Ut vel urna sit amet ex varius eleifend quis sed lectus. /n Donec ut nisi nunc. Quisque et ultricies libero. Aenean sagittis molestie tortor in porttitor. Vivamus justo velit, porttitor id orci eget, dictum blandit nisl. Integer tincidunt nisi quam, a mattis diam ornare a. Morbi scelerisque dolor eget tortor maximus porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ";
    return (
        <div className="w-full flex justify-center mt-20">
            <AnimatedCard
                title="Sobre Mí"
                text={text}
            />
        </div>
    );
};

export default Sobremi;