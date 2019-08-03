FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["src/UnMango.Web.Server/UnMango.Web.Server.csproj", "src/UnMango.Web.Server/"]
COPY ["src/UnMango.Web.Client/UnMango.Web.Client.csproj", "src/UnMango.Web.Client/"]
COPY ["src/UnMango.Web.Shared/UnMango.Web.Shared.csproj", "src/UnMango.Web.Shared/"]
RUN dotnet restore "src/UnMango.Web.Server/UnMango.Web.Server.csproj"
COPY . .
WORKDIR "/src/src/UnMango.Web.Server"
RUN dotnet build "UnMango.Web.Server.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "UnMango.Web.Server.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "UnMango.Web.Server.dll"]
