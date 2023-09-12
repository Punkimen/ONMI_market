export interface IBaseComponents {
  hide?: boolean,
  className?: string,
};

export interface ILink {
  title: string,
  href: string,
  onClick?: () => void,
}
