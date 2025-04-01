import { BranchService } from "./branch.service";
import { ClientService } from "./client.service";
import { DietService } from "./diet.service";
import { MessageService } from "./message.service";
import { NotificationService } from "./notification.service";
import { PetService } from "./pet.service";
import { VetService } from "./vet.service";

export const branchService = new BranchService();
export const clientService = new ClientService();
export const dietService = new DietService();
export const messageService = new MessageService();
export const notificationService = new NotificationService();
export const petService = new PetService();
export const vetService = new VetService();

// Inicializar las dependencias entre servicios
clientService.setPetService(petService);
petService.setClientService(clientService);
vetService.setBranchService(branchService);