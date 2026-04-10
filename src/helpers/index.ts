export function formatDate(dateStr: string) : string {
	const date = new Date(dateStr);
	return new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date)
}