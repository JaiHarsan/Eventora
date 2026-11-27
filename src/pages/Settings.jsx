import { useState } from "react";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Button } from "@/component/ui/button";

function Settings() {
  const [name, setName] = useState("Student User");
  const [email, setEmail] = useState("student@eventora.com");
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-sm text-gray-600">
          Update your basic profile preferences.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-md space-y-4 rounded-lg border bg-white p-6"
      >
        {saved && (
          <p className="rounded bg-green-50 p-2 text-sm text-green-700">
            Settings saved!
          </p>
        )}

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setSaved(false);
            }}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSaved(false);
            }}
            className="mt-1"
          />
        </div>

        <Button
          type="submit"
          className="bg-green-600 text-white hover:bg-green-700"
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default Settings;
