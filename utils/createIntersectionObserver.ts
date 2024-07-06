export function createIntersectionObserver(
    element: HTMLElement | null,
    callback: IntersectionObserverCallback,
    threshold: number = 1
): IntersectionObserver | undefined {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback(entry);
            }
        });
    }, { threshold });
    observer.observe(element);
    return observer;
}