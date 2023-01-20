#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
RUN apt-get update && apt-get install -y npm && apt-get install -y wget
RUN npm install -g npm
RUN apt-get update && apt-get install -y \
    g++ \
    make \
    python \
  && rm -rf /var/lib/apt/lists/*

# Download and install Node.js
RUN wget -qO- https://nodejs.org/dist/v14.15.1/node-v14.15.1-linux-x64.tar.gz | tar xvz -C /usr/local --strip-components=1

EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["OnlineMarketplace/OnlineMarketplace.csproj", "OnlineMarketplace/"]
RUN dotnet restore "OnlineMarketplace/OnlineMarketplace.csproj"
COPY . .
WORKDIR "/src/OnlineMarketplace"
RUN dotnet build "OnlineMarketplace.csproj" -c Release -o /app/build


FROM build AS publish
RUN npm install
RUN dotnet publish "OnlineMarketplace.csproj" -c Release -o /app/publish /p:UseAppHost=false


FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "OnlineMarketplace.dll"]