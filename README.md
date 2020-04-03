# Inject Swapping Example

## The Setup

I tried to create some sort of set up that would make enough sense to show how all of this swapping is working, so I ended up using a ton of metasyntactic variables (more than I knew existed), at a base level just to show what's going on. 

### Main Class with the Swapping Happening

[BazService](./src/baz/baz.service.ts)

```typescript
@Injectable()
export class BazService {
  constructor(
    @Inject('tokenA') private readonly serviceA: CustomService,
    @Inject('tokenB') private readonly serviceB: CustomService,
  ) {}

  getA() {
    return BazService.name + 'getA' + this.serviceA.get();
  }

  getB() {
    return BazService.name + 'getB' + this.serviceB.get();
  }
}
```

A super lightweight class that really just returns a string say "we made it into baz and baz called its friend A or B". "tokenA" and "tokenB" are the injection tokens that get used for overwriting which CustomService the BazService instance gets

[CustomService](./src/interfaces/service.interface.ts)

```typescript
interface CustomServiceInterface {
  get: () => string;
}

export class CustomService implements CustomServiceInterface {
  get() {
    return 'CustomService get method';
  }
}
```

This is just to have an interface and a class that implements that interface. As Kamil said, this could also just be an abstract class.

Foo and Bar services have a dependency on `BazService` and nothing else, so let's take a look at the modules and their metadata:

[FooModule](src/foo/foo.module.ts)

```typescript
@Module({
  providers: [
    FooService,
    BazService,
    {
      provide: 'tokenA',
      useClass: QuxService,
    },
    {
      provide: 'tokenB',
      useClass: QuzService,
    },
  ],
  controllers: [FooController],
})
export class FooModule {}
```

Using Custom providers, we can see that "tokenA" and "tokenB" are being provided at [QuxService](src/foo/qux.service.ts) and [QuzService](src/foo/quz.service.ts). We also notice that we have `BazService` in the providers array.

[BarModule](src/bar/bar.module.ts)

```typescript
@Module({
  providers: [
    BarService,
    BazService,
    {
      provide: 'tokenA',
      useClass: CorgeService,
    },
    {
      provide: 'tokenB',
      useClass: GraultService,
    },
  ],
  controllers: [BarController],
})
export class BarModule {}
```

Now in `BarModule` we see a similar set up with "tokenA" provided as [CorgeService](src/bar/corge.service.ts) and "tokenB" as [GraultService](src/bar/grault.service.ts). Notice here we **also** add `BazService` as a provider again. This is because through modules, providers are singletons, but if a provider is registered in two different modules, each provider is it's own instance, allowing us to give different values to be injected.

Now if we were to start the server up you'd see your normal instantiation logs, and then in another terminal you can use `curl` to make requests or Postman, whichever you really prefer. And you'll see outputs that show each `BazService` calls different A's and B's, jsut as we expect with how they have been bound. 

If you wanted, these `BazService`s could have been instantiated in their own modules, and then have the module imported into the foo and bar module, but this is a good starting place for now.