function Button ({bgColor,padY, padX,weight,size,borRadius,width, text, clrFont,marginButtom}){

    console.log(bgColor)
    return(
        <button className={`${bgColor} ${padX} ${padY} ${weight} ${size} ${borRadius} ${width} ${clrFont} ${marginButtom} cursor-pointer `}>
            {text}
        </button>
    )
}

export default Button