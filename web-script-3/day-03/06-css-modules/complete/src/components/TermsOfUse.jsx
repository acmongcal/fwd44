import Button from './Button';

function TermsOfUse() {
    return (
        <div>
            <p>Dicta repudiandae placeat, molestias aperiam eos dolor natus! Voluptatum labore fuga voluptatem sed quibusdam ad ratione in rerum eos, ducimus corporis officia illo distinctio quos quia, unde aperiam, ullam est.</p>
            <div className="accept-decline-container">
                <Button className="accept" text="Accept" />
                <Button className="accept" text="Decline" />
            </div>
        </div>
    );
}

export default TermsOfUse;
