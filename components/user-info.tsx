import { Card, CardContent, CardHeader } from "./ui/card"

export const UserInfo = ({
    user,
    label,
}: any) => {
    return (
        <Card className="w-[600px] shadow-md">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    {label}
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        ID
                    </p>
                    <p className="truncate text-xs max-w-[180px]">
                        {user?.id}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Username
                    </p>
                    <p className="truncate text-xs max-w-[180px]">
                        {user?.name}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}