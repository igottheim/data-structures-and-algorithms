function power(base, exponent){
    
    if(exponent ===1)
    {
        return base
    }
    
    return base*power(base, exponent-1)
    
}

power(2,4)