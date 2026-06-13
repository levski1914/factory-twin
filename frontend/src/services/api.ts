// src/services/api.ts
const API_URL = "http://localhost:3000";

export async function getOpenAlarms() {
  const res = await fetch(`${API_URL}/alarms/open`);
  return res.json();
}

export async function acknowledgeAlarm(id: string) {
  const res = await fetch(`${API_URL}/alarms/${id}/ack`, {
    method: "PATCH",
  });
  return res.json();
}

export async function resolveAlarm(id: string) {
  const res = await fetch(`${API_URL}/alarms/${id}/resolve`, {
    method: "PATCH",
  });
  return res.json();
}
