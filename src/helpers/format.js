export function formatPhoneNumber(phoneNumber) {
	phoneNumber = phoneNumber.replace(/\D/g, '');

	return phoneNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
}
