export type IEvenUpdatetForm = {
  id: number;
  title: string;
  description: string;
  eventDate: Date;
  createdAt: Date;
  isEditForm: boolean;
  updatedAt: boolean;
  setIsEditForm: (isEditForm: boolean) => void;
};
