const TipComponent = (tip) => {
    return `
    <div class="tip">
        <h4>${tip.topic}</h4>
        <p>${tip.content}</p>
    </div>
    `
}

export default TipComponent;