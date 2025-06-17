function Button ({bgColor,padY, padX,weight,size,borRadius,width, text, clrFont,margin,hover}){

    console.log(bgColor)
    return(
        <button className={`${bgColor} ${padX} ${padY} ${weight} ${size} ${borRadius} ${width} ${clrFont} ${margin} ${hover} cursor-pointer transition duration-300 ease-in-out`}>
            {text}
        </button>
    )
}

export default Button