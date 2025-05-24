type PropType = {
    title: string;
};

export default function NewWindow({ title }: PropType) {
    return (
        <div className="window">
            <div className="window-title-bar bg-dark text-white p-2">{title}</div>
            <div className="window-content p-3">
                <p>This is the content of the window.</p>
            </div>
        </div>
    );
}
