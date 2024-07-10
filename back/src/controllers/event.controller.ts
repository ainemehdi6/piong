import { Request, Response } from "express";
import Event, { IEvent } from "../models/event.model";

export const createEvent = async (req: Request, res: Response) => {
  const { title, flyer, type, content, eventStartDate, eventEndDate } = req.body;

  try {
    const newEvent: IEvent = new Event({ title, flyer, type, content, eventStartDate, eventEndDate });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};

export const getEvents = async (_req: Request, res: Response) => {
  try {
    const events: IEvent[] = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

export const getUpcomingEvents = async (_req: Request, res: Response) => {
  try {
    const currentDate = new Date();
    const events: IEvent[] = await Event.find({ eventStartDate: { $gte: currentDate } });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event: IEvent | null = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const updatedEvent: IEvent | null = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const deletedEvent: IEvent | null = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};
