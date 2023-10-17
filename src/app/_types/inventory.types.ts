export interface IInventoryState {
    tabs: Array<{ title: "Omis" | "Clothes" | "Materials" | "Boxes", isActive: boolean }>,
    changeActiveTab: (title: "Omis" |
        "Clothes" |
        "Materials" |
        "Boxes")=>void
}
