export default function WindowsButton({name, imgSrc, handleClick,fullBtn}: {
    name: string;
    imgSrc?: string;
    handleClick?: () => void;
    fullBtn?: boolean;
}) {
    function handleButtonClick() {
        if (handleClick) handleClick();
    }

    return (
        <button
            className="windows-button windows-border window p-0 m-0 button-pressed"
            onClick={handleButtonClick}
        >
            {fullBtn ? (
                <div className={"p-1 d-flex align-items-center justify-content-center"}>
                    <img src={imgSrc} alt={name} height={20} className="d-block" />
                    <p className={"m-0 px-1"}><strong>{name}</strong></p>
                </div>
            ) : imgSrc ? (
                <img src={imgSrc} alt={name} className="d-block" />
            ) : (
                name
            )}
        </button>
    );
}
