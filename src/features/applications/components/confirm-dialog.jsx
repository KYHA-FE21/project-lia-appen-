import { Check, X } from "lucide-react";
import { forwardRef } from "react";
import SecondaryButton from "../../../components/buttons/secondary-button";
import { CardButtons } from "../../../components/card";

const ConfirmDialog = forwardRef(({ className }, ref) => {
	return (
		<dialog ref={ref} className={className}>
			<div className="text-center text-lg">Är du säker?</div>
			<CardButtons>
				<SecondaryButton
					icon={<Check />}
					color="white"
					bgColor="green"
					className="text-white w-full text-sm"
					onClick={() => {
						ref.current.close("true");
					}}
				>
					Ja
				</SecondaryButton>
				<SecondaryButton
					icon={<X />}
					color="white"
					bgColor="red"
					className="text-white w-full text-sm"
					onClick={() => {
						ref.current.close("false");
					}}
				>
					Nej
				</SecondaryButton>
			</CardButtons>
		</dialog>
	);
});

export default ConfirmDialog;
