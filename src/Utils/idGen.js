const idGen = () => {
    return (((Date.now()
        .toString(16)
        .slice(-4) + Math.random() * 3)
        .toString(16) + Math.random() * 3)
        .toString(16)).substring(0,30)
};

export default idGen;